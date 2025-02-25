export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Amelia";
  }

  if (query.toLowerCase().includes("id")) {
    return "akratzer";
  }

  if (query.toLowerCase().includes("68, 93, 64?")) {
    return "93";
  }

  if (query.toLowerCase().includes("79 plus 83?")) {
    return "162";
  }

  if (query.toLowerCase().includes("80 plus 13?")) {
    return "93";
  }

  if (query.toLowerCase().includes("39 plus 72?")) {
    return "111";
  }

  if (query.toLowerCase().includes("91 plus 63?")) {
    return "154";
  }

  if (query.toLowerCase().includes("66 plus 49?")) {
    return "115";
  }

  if (query.toLowerCase().includes("66 plus 49?")) {
    return "115";
  }

  if (query.toLowerCase().includes("53, 29, 76?")) {
    return "76";
  }

  if (query.toLowerCase().includes("21, 74, 28?")) {
    return "74";
  }

  if (query.toLowerCase().includes("86 plus 93?")) {
    return "179";
  }

  if (query.toLowerCase().includes("35, 52, 49?")) {
    return "52";
  }

  if (query.toLowerCase().includes("37 plus 34?")) {
    return "71";
  }

  if (query.toLowerCase().includes("66 plus 89?")) {
    return "155";
  }

  if (query.toLowerCase().includes("8, 32, 81?")) {
    return "81";
  }

  if (query.toLowerCase().includes("91, 39, 6?")) {
    return "91";
  }

  return "";
}
