import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col px-3 space-y-10 items-center justify-start w-full min-h-screen bg-white">
      <div className="py-3 w-full text-center bg-slate-50">
        <p className="text-2xl font-black  text-gray-900">NCT 취향표</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Link
          href="https://twitter.com/DeveloperTyga"
          className="text-xl text-gray-900 font-medium"
        >
          개발자 타이가 @DeveloperTyga
        </Link>
        <div className="text-xs py-1 space-y-1 text-gray-400 text-center">
          <p>(친구가 만들어달래서 만들었습니다...)</p>
          <p>(다른 유닛도 천천히 추가할게요...)</p>
          <p>(공식 프로필 기준으로 넣었으니 품지 못하는 논란멤 있어도 이해해 주세요...)</p>
        </div>
      </div>
      <div className="grid grid-cols-2 space-x-3 items-center justify-center">
        <Link
          href="/six/dream"
          className="text-center mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          6문항 버전
          <p>(드림)</p>
        </Link>
        <Link
          href="/eight/dream"
          className="text-center mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          8문항 버전
          <p>(드림)</p>
        </Link>
        <Link
          href="/six/127"
          className="text-center mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          6문항 버전
          <p>(127)</p>
        </Link>
        <Link
          href="/eight/127"
          className="text-center mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          8문항 버전
          <p>(127)</p>
        </Link>
        <Link
          href="/six/2022"
          className="text-center mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          6문항 버전
          <p>(2022 기준 전체)</p>
        </Link>
        <Link
          href="/eight/2022"
          className="text-center mt-5 bg-nct hover:bg-nct text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-nct focus:outline-none"
        >
          8문항 버전
          <p>(2022 기준 전체)</p>
        </Link>
      </div>
    </div>
  );
}
