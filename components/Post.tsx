import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <div
      className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border
    hover:border-gray-600"
    >
      {/* Votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButton hover:text-red-400" />
        <p className="text-black font-bold text-xs">3</p>
        <ArrowDownIcon className="voteButton hover:text-blue-400" />
      </div>
      <div className="p-3 pb-1">
        {/* Header */}
        {/* Body */}
        {/* Image */}
        {/* Footer */}
      </div>
    </div>
  );
}

export default Post;
