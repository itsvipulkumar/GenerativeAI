import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from 'react-hot-toast';
// import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Player } from '@lottiefiles/react-lottie-player';


const apiKey = 'acc_2b7b2c8aa7798cd';
const apiSecret = '2399d7479de2a521e019c4337b8e6e27';

const ImageTagger = () => {
  const [uploadId, setUploadId] = useState(null);
  const [imageTags, setImageTags] = useState([]);
  const [loading, setLoading] = useState(false)

  let count = 0;
  const fileInputRef = useRef(null);

  const handleImageUpload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const uploadResponse = await fetch('https://api.imagga.com/v2/uploads', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Basic ${btoa(apiKey + ':' + apiSecret)}`,
        },
      });

      const uploadData = await uploadResponse.json();
      const { upload_id } = uploadData.result;
      setUploadId(upload_id);
      setLoading(false);
      toast.success("Image Uploaded!")
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchImageTags = async () => {
    try {
      // Now use the 'upload_id' to get image tags
      const tagsResponse = await fetch(
        `https://api.imagga.com/v2/tags/?image_upload_id=${uploadId}`,
        {
          headers: {
            Authorization: `Basic ${btoa(apiKey + ':' + apiSecret)}`,
          },
        }
      );

      const tagsData = await tagsResponse.json();
      const filteredTags = tagsData.result.tags.filter((tag) => tag.confidence >= 15);

      setImageTags(filteredTags);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <div className='image_tagging'>

      <div className='image_tagging_header'>
        <h1> Witness Object Generation and Detection in Real-Time!</h1>
        <p>Unlock the limitless potential, Just Upload image and check the Availiblity of object.</p>
      </div>
      <div
        className='drop_box'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}

      >
        <p>Drag and drop an image here</p>

        or
        <input type="file" onChange={handleInputChange} ref={fileInputRef} style={{ display: 'none' }} />
        <Button endIcon={<CloudUploadIcon />} onClick={() => fileInputRef.current.click()}>Choose Image</Button>
      </div>
      {loading &&
        (
          <div className="loading-overlay">
            <Player
              src='https://lottie.host/6ac89698-6a6c-41f8-9911-8e14b0a92659/lhPwO6kPAD.json'
              className="player"
              loop
              autoplay
              style={{ height: '300px', width: '300px' }}
            />
            {/* <lord-icon className="loading-icon" trigger="loop"
                        delay="0" src="https://cdn.lordicon.com/ymrqtsej.json"  size={400}></lord-icon> */}
          </div>
        )
      }

      <Button id='btn' color="success" variant="contained" className={uploadId ? "btn_yes" : "btn_no"} onClick={fetchImageTags} disabled={!uploadId}>
        Click Here to Proceed
      </Button>
      {/* {uploadId && <p>Uploaded with ID: {uploadId}</p>} */}
      {imageTags.length > 0 && (
        <>
          {/* <h3>Image Tags with Confidence >= 15:</h3> */}


          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">SN</StyledTableCell>
                  <StyledTableCell align="center">Object</StyledTableCell>
                  <StyledTableCell align="center">Availability Percent(%)</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {imageTags.map((tag, index) => (
                  <StyledTableRow key={index}>

                    <StyledTableCell align="center">{++count}</StyledTableCell>
                    <StyledTableCell align="center">{tag.tag.en}</StyledTableCell>
                    <StyledTableCell align="center">{tag.confidence}%</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ImageTagger;
