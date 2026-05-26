import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div data-theme="dark" className="min-h-screen bg-base-100 text-base-content">
      <nav className="border-b border-base-300 bg-base-200/80 px-4 py-3 shadow-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-2 sm:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-sm sm:btn-md ${isActive ? 'btn-primary' : 'btn-ghost'}`
            }
          >
            ホーム
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `btn btn-sm sm:btn-md ${isActive ? 'btn-primary' : 'btn-ghost'}`
            }
          >
            概要
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `btn btn-sm sm:btn-md ${isActive ? 'btn-primary' : 'btn-ghost'}`
            }
          >
            プロジェクト
          </NavLink>
        </div>
      </nav>
      <Outlet />
      <footer className="border-t border-base-300 px-6 py-6 text-center text-sm text-base-content/60">
        Built by Alex
      </footer>
    </div>
  )
}
