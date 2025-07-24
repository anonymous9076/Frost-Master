import moment from "moment";

export function dateFormate(dateTime: string) {
  return moment(dateTime).format("D MMMM YYYY");
}
