import React from 'react'

const Notifications = (props) => {
  const notifications = {props};
  return (
    <div className="section">
      <div classNmae="card z-depth-0">
        <div className="card-content">
          <span cLassname="card-title">
            Notification
          </span>
          <ul className="online-users">
            { notifications &&  notifications.map(item =>{
                return (
                  <li key={item.id}>
                    <span className="pink-text">
                      {item.user}
                    </span>
                  </li>
                )
                })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications;