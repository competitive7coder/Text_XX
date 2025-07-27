import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}: {props.alert.msg}</strong> 
 
</div>
    </div>
  )
}
