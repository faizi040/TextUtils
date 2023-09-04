import React from 'react'

export default function Alert(props) {
  return (
    // adding a div to avoid cls-cumulative layout shift
    <div style={{ height: '50px' }}>
      {props.alert && <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
      </div>}
    </div>

  )
}
