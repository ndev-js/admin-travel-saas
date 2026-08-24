import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Tenants',
  },
];
const Tenants = () => {
  return (
    <>
      <BreadcrumbComp title="Tenants" items={BCrumb} />
      <div>Tenants</div>
    </>
  );
};

export default Tenants;
