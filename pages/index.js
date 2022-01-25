import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors"
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  
  return (
    <div className="container-fluid"> 
      <div className="row">
        <div className="col">
          
        </div>
        <div className="col-6">
          <h1 className="text-center title">ANGRY SHARKS</h1>
        </div>
        <div className="col text-end">
          {active ? <button onClick={disconnect} className="btn btn-outline-light connextion">Disconnect</button> : 
            <button onClick={connect} className="btn btn-outline-light connextion">Connect to metamask</button>}
        </div>
        <div className="container-fluid square-box d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-outline-light btn-lg" data-bs-toggle="button">MINT</button>
        </div>
      </div>
    </div>
  )
}
  