const NavBar = () => {
    return (
      <header className="my-5 mx-5 flex justify-between border-b-2 pb-5 items-center">
        <h1 className="font-sans text-4xl font-semibold">Translate app</h1>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
          <span className="text-xs font-medium leading-none text-white">CH</span>
        </span>
      </header>
    );
}

export default NavBar;