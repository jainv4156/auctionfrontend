export default function Bidhistory(props) {
  return (
    <div className="col-md-3 scrollspy-example  h-300">
      <div className="list-group">
        {props.itemhistory.length !== 0 && (
          <div className="list-group-item list-group-item-action active">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.itemhistory[0].bid}</h5>
              <small>Just now</small>
            </div>
            <small>{props.itemhistory[0].bidder}</small>
          </div>
        )}
        <div
          
          className="bg-body-tertiary p-3 rounded-2"
        >
          {props.itemhistory.map((item) => {
            return (
              <div
                key={item.id}
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.bid}</h5>
                  <small className="text-body-secondary">few min ago</small>
                </div>
                <small className="text-body-secondary">{item.bidder}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
