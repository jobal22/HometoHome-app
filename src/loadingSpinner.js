import React, { Component } from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

export const LoadingSpinnerComponent = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&
        <div
          style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}
        >
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </div>
    );  
  }
  