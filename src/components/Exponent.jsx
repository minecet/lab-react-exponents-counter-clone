import Counter from "./Counter";

const Exponent =({count,exponent}) => {
  return(
    <div className="exponent-counter-container">
     <p className="exponent-label">{count}²</p>
     <p className="exponent-result">{count**exponent} = <span className="total">{count**exponent}</span></p>
   </div>)
};





export default Exponent;

