import global from '../../static/global';
import Link from 'next/link';

class NavigationBottom extends React.Component{
  render () {
    return (
      <div className="navigationList">
        <style jsx>{`
          .navigationList{
            margin-right: 18%;
            margin-left: 18%;
            margin-top: 0;
            margin-bottom: 0;
            padding-top: 20px;
          }
          .navigationItem{
            display: inline-block;
            margin-bottom: 5px;
            text-align: center;
            color: ${global.gray};
            border-bottom: 2px solid rgb(255, 255, 255);
            padding-bottom: 5px;
            -webkit-transition: border 0.3s;
            transition: border 0.3s;
          }
          .navigationItem:hover{
            color: ${global.blue};
            border-bottom: 2px solid ${global.blue};
            -webkit-transition: border 0.3s;
            transition: border 0.3s;
          }
        `}</style>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <Link href={`/category?filter=مردانه`}>
              <a className="navigationItem">مردانه</a>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <Link href={`/category?filter=زنانه`}>
              <a className="navigationItem">زنانه</a>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <Link href={`/category?filter=بچه گانه`}>
              <a className="navigationItem">بچه گانه</a>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <Link href={`/category?filter=ورزشی`}>
              <a className="navigationItem">ورزشی</a>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <a href="#" className="navigationItem">تخفیف</a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
            <a href="#" className="navigationItem">برندها</a>
          </div>
        </div>
      </div>
    );
  }
}
export default NavigationBottom;
