import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EmployRow = ({employees}) => {
    AOS.init();

    const {image, contact, title, _id, department, name, position, status} = employees;
    return (
        <tr data-aos="zoom-in-up">
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar mr-3">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{contact}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {title}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{department}</span>
                        </td>
                        <td></td>
                        <td></td>
                        <td>{position}</td>
                        <td>{status}</td>
                        <th>
                        <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                        </th>
                    </tr>
    );
};

export default EmployRow;