import './App.css';
import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from 'bootstrap';
import './carousel.css';

  const photos = [
    {
      name: 'Photo 1',
      url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAAC6CAMAAACHgTh+AAABelBMVEUwvL3///8VHSBFSk2qqqoAAAD4YDHtp3byuJPv7+8ADBGwsLCtra15e3y4ubm6vLxjZmgACQ/29vb/0Rzf398TAAItrK7Ozs7n5+fW1tbBwcFAamwqnZ7GxsZITE8TAQoAACCvkh4Yu8L/1RXezUoAESB8ayH/3m7ebUYTCg9twZ4ni4wUExf7u6z4VyAYuLn3TAAyODz5cUrsoWv+8O35knb4VzJTxcbkuJb6uI/5iWvo9/f16fHI3eP/WB+j3d75fVrO7e3fqXz7qZSb0daFzM/dZTg0JSPs3eFNKyP+xB/4Zjit4eHa8vK9rYyP19ew1tzR3+ZkxcjhoI/rz89Xrqjxu7XxrqRbnpgdV1kyExBMHRLyo5UqHSPuxcI+OiCHaCTzlYF5bD3+z2YaenuOhoeCmpve5bf//er/21jv4rnpvn+juqf/zDeGu62iwJH328j0y7JosqbIq4i+rYvntWX3ulejdVjTnVfkdlfe2ITHtHYgZmcaODvCI56EAAAJzElEQVR4nO2djXvbNB6A49KEdulSZro1BMpHC2yDaxT6gdcmTROajEKTJs1aPu64HjvuA7jeWIHjbgf879ixZH3ZslMUW671Ps+eJ03SPdJb6SfpJ9nO5VQA2CRdBmUAue5wb9i1tBEHYO019jqdzl7jRBuxdXQbnXF3AblOo5t5IbaOEZIArEYn60KsBtlJrMYouaKoADihWgTonmS7gVgN+mdQznQDAZ0h3R7AcJjlBgL22ADa3cu2jy7zzijTAUS3Dxo+frBvZIxRmfFxwnagbAHK9BR91Mh083AEUD+Ws76CAcOTHFZwkuloOgYM0YIOjMpah7NmcTWAPb3cHwM6ro9h5hf7LnBSBrI9FcOgNW3mx1qIt+YvW4mWQxVQDijrc1OIl/LIeO4DgZtF1pOFLqCBwgabPMwkwPJaBShndUPqzsN7iIePTtEPD08fEe+fJV3IGDlrFhDNTz6twpfVTz8h3r92Pu4Ec1bF9T7c9l7vHmIf1c8Ev5901a7C57eD+WMBM3/kvTwq49eFP+WDf38m6cpNDrg9E8yHuNq7h7itVA938QcfCX7/tXeTrt7E3Inmo/rFOeHj/ItqJB/3U+rjrQD+7K+AkvMR/O4NlvT6+MvbAXyJw2mjRcSSVgMH1C/hd2+yPJdWH2+9vRbAx+/jEFogaWygV+9/DL9bMRhu3kivjxf9wT62iXBqd5jTbezD/epasZQhH/YUjPKBJ2fYx0IpOz6ap48pH49Pm56PNeiDFZJeH3+9G8BXno/5jQLJRsNrH1/B7xZZIan1ceMmGwoRW7AVVDcOm1WS5mELCmluwe8WWSHX0UfN1bF9frhOc3i+6wqpkT4oIdfRx9GGw9G5z2fr8DPKBynkGvqYhCIrRPughWgftBDtgxaifdBCUukDDPPyfbhCbB/5YtL1mxDQM6fhYyzE8VGpB+1MvBJrPSMC9o35qfhwhDg+Fo1+gJDPFUw2g4Eh0ccCxWzF9WG0/YXk/xZzZSNgGRJ9mCzF/NiHse8n5Ozv/4i9uqEYMn1wlKAPY8QLAW3DSKDCQkA/Jh8+NQemYQzU2gS2Y2lcPviY6vTUgMCSFJYRmw8uhICe865SPkA9Rh8Gc+IM/NN+7+t3kqm5L+5fKDYfzLRs9c1vzG/XVPJhoVLH44MJnqtvruXfUMmHO7bE6IMeY2wfr6vkw5mYxuyDGk2U81H39WHO88jyQYVUxXwQzYPysTTLUURfWyiyvDSZD7KBKOYjR5Sa9rG8RFP0fPCqlifzQTYQtXyQzYPxUWbrVEJbDXxPMif0QTQQxXzUiVKKfSw+qm2HVDuyD6KBKOWDah4hPh41C1vGFeF84Aailo8+WUihj/XfoYP3gecgSvmwqDKKfKzXCkXjyvA+vGWdSj68lUuoj/XaEXfo53f5qKvoI0eXOtiHrWNr0WsfXDowCIEPA91ERSUf3RAfWwdYh1HC84+FaMx6M1ofHz3YQBTy4WQuhT52aweeDsIHPz/1Z0Hko66eD6a7+PSXliPE1YF9XAEfH6jDKORjFOrDEQJ1SPcBO4w6PpjRxT+etppNeOwH+/BZ+voj9FFXzkedKaHv+NJC07CSYD0XgCh+oDm7Oj7Y8OHvw0SzUuyjWIpGUezDvUZTHR9s+Ahb30qOHzCAKOMDbkIF+lisUKwUZfvoEz7+9WDMBVXClyMiyUdb6MNnkgE/Mpei4k1QfX24a7rVb8Y+5sbsXLhB1hrz3nPRkOSDDadR88my4qkbUK1/Ez7mdp6Mi+Z+Hq8PLpxSPuaXOVCS1KxEZDHEhxtQKR9zO2fen8qM1wcXTkPyyQuy44e75ofxY84jKR8Drny0jyVmsVoqPZXso4d9fId9PEjGBwjzEZg/NV+KijCeXu64zDHsHJ+dmQn4YGfrkfOncuLpU9YDYWQnCR/tyXys19DE3eRDbQCi9nEZ7GNuTn0fsvOnxhbXURL20edKLcyfFuTmT+0Oc3l5fKyQD246JsyfFnD+1FyJ2F1WxPPT9PnA+dPClvT1/lNBh1HUx27tsacD+5A13obHj1ejEZsPo+UIgSOL7PX+5ebzQWy6PvKC20WQxOfDzZ8WppI/3doMFJKIj2jjS6tZZfOn5mL4Ui7Ses54cpE6H1PMnxpzQQ0kER/taD74/KlZjkpIPkit+BHRh4f0/KliPiZdz8n38UCp/hK23ue2p/F+Q1RC4kf7+wt/I7aP2RfMeH2E5MfKKxzoEKG0eNoLGF4cH7fyy0a8PiyufFQ+WXCcQ85+pWEMPvBx8YGDaazMxtxfUBI7wIfgPO4V8Pcx4nxs/uAWzc0XxuxDuN+wNLvMLEak70cZuR9w+Nh0eB5uvyTjoy32wZ/HfQzzhVLOwzgb/Gc/Hh8f/+en//7vp+OLiydPvNtjArdrxuyDG2BC8snPYD5ZznkpdAYV7t+uUmUbb8+N8q9FQ44PPqCKfTxr7sJXUs7ToSOXgv3sVyIiyQcXUIU+tpvP2O9Hx9eHe2BKmf19PoCIfGzX7nn5U0ntwy2FQj7YACLwsV3bXZS8vm2rdl6KCyDBPmwd5PkgKePLQDkf7AyE83G+gXVIX8/BSz5U8sGcEOJ8HNQ2PB2yffQVPI/LdBi+v4yFuDoIH1LyQQMFfTAdxid+HNRaUIfsfCEqg1I+6BHGL54e1NA0DPuIeNyyVBL4aCt5vQd9Zsp3fDlAs1K58cN7Zq5SPuikYYz5wjp5/dwtZXzQETWiDxnnLfE9DVb/f/fmz3dV8UHN2WkfFSZbKLoeeeJ4SpRgvA+kzCOnySxqSH5sAbWPCp9b9aUS6IO8Scy9ms1nyRmgIbfp4rq/A33Hi3vNZlMdH2QEic2H723IFIGIIHH5MJOusxDcQOLyodjdxhjwqi4mH0G3dVQFbxUTkw/lH/GIxtx4fPQUbx541h6Lj8C7wioE7DGx+FC+tzhYsflQe2xBuImQGHwodiPLQMazsun7qCddz8g4IWT6PlIRPCDm9H343C1YXayp+0hHLEUAa7o+Kiqvan0ZTdPHfXVSHFGR9jwLXx+pe56F9sEwPR+VtPqYee+FafBqWp/nOTPDPatVBjPp9TEtUugjN00ft1Po45f7f0DcuCUF7/+7/2vSlbsS6Onw3Xm/G2xPiml2QJqfN0/SljDM1q20TdGDASP+gtQJSdf6LRQwCLtttpBe7nrpsIX4XFOWXRsOtpEr9Zr9a2nDAYBRe0IZ/QG4rjbGgNyAv5Y7iHrPut42HOwaDqK0kv5+BmS4AACs/bZgwOn3urmsyIDYTnKj/V6fDrH1fnt/YIGMufAAYFx15/o2+x/8OaMuNBqNRqPRaDQajUaj0Wg0Go1Go9FoNJngN0v+a9LUvfFyAAAAAElFTkSuQmCC",
    },
    {
      name: 'Photo 2',
      url:"https://multichannelmerchant.com/wp-content/uploads/2017/09/inventory-management-clipboard-warehouse-guy-feature.jpg",
    },
    {
      name: 'Photo 3',
      url:"https://image.marriage.com/advice/wp-content/uploads/2017/12/Quick-Tips-to-Managing-Finances-in-Marriage.jpg",
    }
  ]

class Carousel extends Component{
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    }
  return(
<div className="App">
  <Slider {...settings}>
    {photos.map((photo) => {
        return(
            <div>
                <img width="100%" src={photo.url}/>
            </div>
        )
    })}
  </Slider>
</div>
  );
}
}
export default Carousel;
