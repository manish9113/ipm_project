
import {Paper} from '@mui/material'



const TableData=({product})=>{
    return(
        <Paper elevation={3} style={{ padding: '20px', maxWidth:'60vw', margin: '0 auto' }}>
        <h2>Product Details</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{  padding: '8px' }}>MRP</td>
              <td style={{  padding: '8px' }}>₹{product.data.price.mrp}</td>
            </tr>
            <tr>
              <td style={{  padding: '8px' }}>Discount</td>
              <td style={{  padding: '8px' }}>{product.data.price.discount}</td>
            </tr>
            <tr>
              <td style={{  padding: '8px' }}>Cost</td>
              <td style={{  padding: '8px' }}>₹{product.data.price.cost}</td>
            </tr>
            
            <tr>
              <td style={{  padding: '8px' }}>Quantity</td>
              <td style={{  padding: '8px' }}>{product.data.quantity}</td>
            </tr>
            <tr>
              <td style={{  padding: '8px' }}>Description</td>
              <td style={{  padding: '8px' }}>{product.data.description}</td>
            </tr>
            <tr>
              <td style={{  padding: '8px' }}>Discount Tagline</td>
              <td style={{  padding: '8px' }}>{product.data.discount}</td>
            </tr>
            <tr>
              <td style={{  padding: '8px' }}>Tagline</td>
              <td style={{  padding: '8px' }}>{product.data.tagline}</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    )
}


export default TableData