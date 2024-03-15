import { useEffect, useState } from 'react';
import { Bowling } from './types/Bowling';
function BowlerList() {
    const [bowling, setBowling] = useState<Bowling[]>([]);

    useEffect(() => {
        const fetchBowlingData = async () => {
            const rsp = await fetch('http://localhost:5037/bowling');
            const bowl = await rsp.json();
            setBowling(bowl);
        };

        fetchBowlingData();
    }, []);

    return (
        <div id="tableContainer">
            <table className="table table-striped customTable">
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>ZIP</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {bowling.map((i) => (
                        <tr key={i.bowlerID}>
                            <td>
                                {i.bowlerFirstName} {i.bowlerMiddleInit} {i.bowlerLastName}
                            </td>
                            <td>{i.team.teamName}</td>
                            <td>{i.bowlerAddress}</td>
                            <td>{i.bowlerCity}</td>
                            <td>{i.bowlerState}</td>
                            <td>{i.bowlerZip}</td>
                            <td>{i.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default BowlerList;
