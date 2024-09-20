const NotFound = ({ error }) => {
  return (
    <div>
      <main className="w-7/12 mx-auto rounded-lg">
        <article className="w-8/12 mx-auto p-4 "></article>
        <h1 className="text-center text-7xl text-red-900 ">{error}!</h1>
      </main>
    </div>
  );
};

export default NotFound;
