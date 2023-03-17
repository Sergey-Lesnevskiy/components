import style from './card.module.css';
import React from "react";
import image from '../../assets/img/frogs-5088767__340.jpg';
import svgLike from '../../assets/svg/like-svgrepo-com.svg';
import svgEye from '../../assets/svg/eye-svgrepo-com.svg';
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (React.createElement("div", { className: style.wrapper_card },
            React.createElement("img", { className: style.image, src: image, alt: "" }),
            React.createElement("p", { className: style.title }, this.props.title),
            React.createElement("p", { className: style.subTitle }, this.props.subTitle),
            React.createElement("div", null,
                React.createElement("div", { className: style.footer_card },
                    React.createElement("img", { className: style.svg, src: svgLike, alt: "" }),
                    React.createElement("div", { className: style.countLike }, this.props.like),
                    React.createElement("img", { className: style.svg, src: svgEye, alt: "" }),
                    React.createElement("div", { className: style.countEye }, this.props.countEye)))));
    }
}
export default Card;
