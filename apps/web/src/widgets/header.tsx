export const Header = () => {

  return (
    <header className="h-15 w-full border-b border-(--border-color)">
      <div className="h-full flex items-center justify-between">
        <div className="max-w-70 w-full h-full border-r border-(--border-color)">
          {/* <Logo className="text-[30px]" /> */}
        </div>
        <div className="icons h-full flex items-center justify-center gap-5 pr-5">
          {/* {data.map((page, index) => (
            <Link key={index} to={page.route!} onClick={page.onClick}>
              <i className={`${page.icon} cursor-pointer`}></i>
            </Link>
          ))} */}
        </div>
      </div>
    </header>
  );
}
