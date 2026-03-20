export default function CategoriesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="categories-layout">
        {/* Tu pourrais mettre un breadcrumb, un menu latéral, etc. */}
        {children}
      </div>
    );
  }