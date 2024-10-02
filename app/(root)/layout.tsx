import { RootLayoutProps } from 'app/types/types';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className="flex">
      <aside className="flex justify-start">
        <nav>
          <div>
            {['Dashboard', 'Expenses', 'Incomes', 'Budgets', 'Reports'].map(
              (route, index) => (
                <div key={index}>{route}</div>
              )
            )}
          </div>
        </nav>
      </aside>
      <section className="flex">{children}</section>
    </main>
  );
};

export default RootLayout;
