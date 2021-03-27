import React from "react";
import { Typography } from "@material-ui/core";
import nodata from '../../assets/nodata.png'

type Props = {
    title: string
}

function Nodata(props:Props) {

    const { title  } = props;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        marginTop: '1.875rem'
      }}
    >
        <Typography variant="h5">{  title }</Typography>
        <img style={{height: '18.75rem'}} src={nodata} alt="no data svg" />
    </div>
  );
}

export default Nodata;
