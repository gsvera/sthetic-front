export default async function Cancel() {
  return (
    <div className="view-cancel">
      <div
        className="background-general-img"
        style={{
          backgroundImage: `url(banner-work.jpeg)`,
        }}
      >
        <div className="banner-shadow-general">
          <div className="wd-10">
            <div className="text-center">
              <h1 className="title-banner-simple">
                Ha cancelado la transación, intente de nuevo...
              </h1>
            </div>
            <div className="wd-6 wd-mob-9 m-horizontal-auto">
              <p className="text-help">
                Si tiene problemas para realizar su pago envíenos un correo a
                sobre su situación{" "}
                <a href="mailto:hola@meredith-aesthetic.com">
                  hola@meredith-aesthetic.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
