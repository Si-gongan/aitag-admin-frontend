interface PostTitleProps {
  title: string;
  detail: string | null;
}

export default function PostTitle({ title, detail }: PostTitleProps) {
  return (
    <div className="flex flex-col gap-25">
      <h2 className="text-36">{title}</h2>
      {detail && (
        <div className="flex flex-col gap-14 w-full text-24">
          해설진 작성 세부 요청서
          <p className="flex p-20 bg-gray-100 text-24">{detail}</p>
        </div>
      )}
    </div>
  );
}
