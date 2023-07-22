const mapping: Record<string, string> = {
  advice: 'advice',
  firms: 'firm',
  'saved-advices': 'saved_advice',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
