import React, { useState } from "react";
import { Link } from "react-router-dom";

let Calculator = () => {

    const [result, setResult] = useState('');

    const [number, setNumber] = useState({
        fNum: 0,
        sNum: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNumber((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    // let addNum = () => {
    //     const firsNum = parseInt(number.fNum);
    //     const secondNum = parseInt(number.sNum);
    //     var res = firsNum + secondNum;
    //     setResult(res);

    // }
    // let subNum = () => {
    //     const firsNum = parseInt(number.fNum);
    //     const secondNum = parseInt(number.sNum);
    //     var res = firsNum - secondNum;
    //     setResult(res);

    // }
    // let mulNum = () => {
    //     const firsNum = parseInt(number.fNum);
    //     const secondNum = parseInt(number.sNum);
    //     var res = firsNum * secondNum;
    //     setResult(res);

    // }
    // let divNum = () => {
    //     const firsNum = parseInt(number.fNum);
    //     const secondNum = parseInt(number.sNum);
    //     var res = firsNum / secondNum;
    //     setResult(Math.round(res));


    // }

    const handleOperation = (option) => {



        var res = 0;
        var firstNum = parseInt(number.fNum);
        var secondNum = parseInt(number.sNum);
        switch (option) {
            case ('add'): res = firstNum + secondNum;
                setResult(res);
                break;
            case ('sub'): res = firstNum - secondNum;
                setResult(res);
                break;
            case ('mul'): res = firstNum * secondNum;
                setResult(res);
                break;
            case ('div'): res = firstNum / secondNum;
                setResult(Math.round(res));
                break;

            default: setResult(0);
        }

    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">Calci</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="number" name="fNum" value={number.fNum} onChange={handleChange} placeholder="Enter Num One" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <input type="number" placeholder="Enter Num Two" name="sNum" value={number.sNum} onChange={handleChange} className="form-control" />
                                    </div>
                                </div><br />
                                <div className="row text-center">
                                    <div className="col-3">
                                        <button onClick={() => handleOperation('add')} className="btn btn-primary btn-lg fw-bold">+</button>
                                    </div>
                                    <div className="col-3">
                                        <button onClick={() => handleOperation('sub')} className="btn btn-primary btn-lg fw-bold">-</button>
                                    </div>
                                    <div className="col-3">
                                        <button onClick={() => handleOperation('multi')} className="btn btn-primary btn-lg fw-bold">*</button>
                                    </div>
                                    <div className="col-3">
                                        <button onClick={() => handleOperation('div')} className="btn btn-primary btn-lg fw-bold" >/</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="" className="form-control text-center">Aswer :</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" value={result} onChange={handleChange} className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Calculator;