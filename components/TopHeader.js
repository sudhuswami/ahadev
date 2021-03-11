export default function TopHeader() {
  return (
    <div className="header_top_menu pt-2 pb-2 bg_color">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8">
            <div className="header_top_menu_address">
              <div className="header_top_menu_address_inner">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>example@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>24/5, 1st Floor,
                      Kurigram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>+ (1800) 456 7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="header_top_menu_icon">
              <div className="header_top_menu_icon_inner">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
