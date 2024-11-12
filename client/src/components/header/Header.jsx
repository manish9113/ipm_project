import { AppBar, Toolbar, Box, Typography, styled, ListItem } from "@mui/material";
import { useState, useEffect,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Datacontext } from "../../context/dataContext";


import SearchIcon from "@mui/icons-material/Search";
import { InputBase,List } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions";
import AccountMenu from "./Menu";

const StyledInput = styled(Box)`
  border: 2px solid white;
  margin: 2px;
  border-radius: 4px;
  height: 40px;
  display: flex;
  padding: 2px;
  background-color: white;
`;

const Header = () => {
  const [text, setText] = useState("");
  const {account,setAccount}=useContext(Datacontext)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  const prod = useSelector((state) => state.ProductsData);
  const ProductsData = prod.products;
  

  const getText = (text) => {
    setText(text);
    
  };


   // Retrieve account info from localStorage on component mount
   useEffect(() => {
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, [setAccount]);

  // Save account info to localStorage whenever it changes
  useEffect(() => {
    if (account) {
      localStorage.setItem('account', account);
    }
  }, [account]);
  

  return (
    <div>
      <AppBar>
        <Toolbar
          style={{
            minHeight: 56,
            justifyContent: "space-between",
            backgroundColor: "grey",
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <Box style={{ display: "flex" }}>
              <img
                src="/images/icon.png"
                alt="icon"
                style={{ width: 40, height: 40, cursor: "pointer" }}
              />
              <Typography
                style={{
                  marginLeft: 10,
                  marginTop: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                E-COMM
              </Typography>
            </Box>
          </Link>
          <StyledInput>
            <InputBase
              placeholder="Search…"
              inputProps={{ maxLength: 50, style: { width: "30vw" } }}
              onChange={(e) => getText(e.target.value)}
              value={text}
              
            />
            <SearchIcon
              style={{
                cursor: "pointer",
                marginTop: 9,
                marginLeft: 10,
                color: "black",
              }}
            />
            {
              text&&
                 <List style={{marginTop:45,position:'absolute',background:'white',color:'black'}}>
                  {
                    ProductsData.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                      <ListItem>
                        <Link to={`/products/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none',color:'inherit'}}>
                        {product.title.longTitle}
                        </Link>
                      </ListItem>
                    ))
                  }
                 </List>
            }
          </StyledInput>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            
          <Link to={'/cart'} style={{textDecoration:'none',color:'inherit'}}>  <ShoppingCartIcon
              style={{ marginRight: 40, width: 30, height: 30 ,cursor: "pointer",}}
            />
            </Link>  
            
           
            
            {account ? (
              <Box style={{ width: 30, height: 30,display:'flex',alignItems:'center',justifyContent:'center',marginRight:15}}>
              <AccountMenu />
              </Box>
            ) : (
              <Link to={`/signin`}>
              <AccountCircleIcon style={{ width: 40, height: 40,textDecoration:'none',color:'white' }} />
              </Link>
              
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
