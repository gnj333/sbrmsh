import { type RouteParams } from "atomic-router";
import { Link as RouterLink } from "atomic-router-react";

export function Link<P extends RouteParams>(
  props: Parameters<typeof RouterLink<P>>[0],
) {
  return <RouterLink {...props} />;
}
