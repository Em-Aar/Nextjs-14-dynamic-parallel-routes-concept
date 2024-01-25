export default function Layout(props: {
  children: React.ReactNode;
  content: React.ReactNode;
  post_titles: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex ">
        {props.children}
        <div className="p-6 bg-yellow-700 ">
            <h2 className="text-xl md:text-4xl font-semibold pb-4 underline underline-offset-4 ">Users Details</h2>
            {props.content}</div>
        <div className="p-6">
            <h2 className="text-xl text-white md:text-4xl pb-4 underline underline-offset-4">
                Post Titles
            </h2 >
            {props.post_titles}
            </div>


      </div>
    </>
  );
}
