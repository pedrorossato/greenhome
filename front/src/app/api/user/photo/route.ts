export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('userId');
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/findPhotoByUserId/${id}`,
  );
  return res;
}
