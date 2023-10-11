async function create(event, context) {
  const body = JSON.parse(event.body);
  return {
    statusCode: 201,
    body: JSON.stringify({
      ...body,
      createdAt: new Date().toISOString(),
      state: 'OPEN'
    }),
  };
}

export const handler = create;


