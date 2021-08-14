import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function MovieModal({modal, setModal, selectMovies}) {

    const mm = localStorage.getItem('name1');
    const localCron = JSON.parse(mm)

    const nn = localStorage.getItem('name2');
    const localCronSeat = JSON.parse(nn)


    const toggle = () => setModal(!modal);


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <table className="table">
                        <thead className="theada">
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Seans</th>
                                <th className="th-center">Seat</th>
                                <th>price</th>
                                <th>total value</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {
                                localCron.map((item, index) =>  
                                    <tr className="tr-style">
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.seans}</td>
                                        <td className="o-hidden">
                                            <div className="table-seat-parent">
                                                {
                                                    localCronSeat == null ? '' : localCronSeat.map((item, index) => 
                                                        <div className="table-seat d-flex justify-content-around">
                                                            <p>Row: {item.row}</p>
                                                            <p>Seat: {item.seat}</p>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{`${item.price.slice(0, 6) * (localCronSeat == null ? '' : localCronSeat.length)}  so'm`}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </ModalBody>
                <ModalFooter>
                    <Button variant="contained">Send</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default MovieModal
