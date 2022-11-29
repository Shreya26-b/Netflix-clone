import './content.css';
import Row from '../row/row';
import RowData from '../../Constants/URL';
const Content = () => {
    return (
        <div className="content_wrapper">
            {RowData.map((ele) => {
                return <Row title={ele.title} url={ele.url} />
            })} 
        </div>
    );
}
export default Content;



// adc2fc808bb96bd1483f9526634c6061