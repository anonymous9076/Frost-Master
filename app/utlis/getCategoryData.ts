import { getCategory } from "../api/Product";

export async function getcategories() {
  try {
    const data = await getCategory();
    return data;
  } catch (err) {
    return err;
  }
}
