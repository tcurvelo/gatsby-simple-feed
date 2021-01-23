/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: ".env"});
const apikey = process.env.SH_APIKEY;
const project_id = process.env.PROJECT_ID;
const spider = process.env.SPIDER;

async function fetchItemsFromLastJob( {actions, createNodeId, createContentDigest } ){
  console.log("🕷️ Collecting items from Scrapy Cloud");
  const auth_config = {"auth": {"username": apikey, "password": ""}};

  const last_job_url = `https://app.scrapinghub.com/api/jobs/list.json?project=${project_id}&spider=${spider}&state=finished&count=1`;
  const last_job = await axios.get(last_job_url, auth_config);

  const job_id = last_job.data.jobs[0].id;
  const items_url = `https://storage.scrapinghub.com/items/${job_id}`;
  const items = await (await axios.get(items_url, auth_config)).data;
  items.forEach(item => {
    const node = {
      ...item,
      id: createNodeId(`Item-${item.title}`),
      parent: null,
      children: [],
      internal: {
        type: "Item",
        mediaType: "application/json",
        contentDigest: createContentDigest(item)
      }
    };
    actions.createNode(node);
  });
}

export async function sourceNodes(params) {
  await Promise.all([
    fetchItemsFromLastJob(params)
  ])
}
