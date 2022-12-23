import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-start w-full min-h-screen bg-white">
      <div className="py-3 w-full text-center bg-slate-50">
        <p className="text-2xl font-black  text-gray-900">NCT 취향표</p>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="https://twitter.com/DeveloperTyga"
          className="text-xl text-gray-900 font-medium"
        >
          개발자 타이가 @DeveloperTyga
        </Link>
        <div className="text-xs py-1 space-y-1 text-gray-400 text-center">
          <p>(친구가 만들어달래서 만들었습니다...)</p>
          <p>(다른 유닛도 NCT 전체도 천천히 추가할게요...)</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <Link
          href="/six"
          className="mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          6문항 버전 (드림)
        </Link>
        <Link
          href="/eight"
          className="mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          8문항 버전 (드림)
        </Link>
      </div>
    </div>
  );
}
