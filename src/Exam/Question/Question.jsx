import {React, useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { ReactSortable } from 'react-sortablejs';
import '../Question/Question.css'


const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared",
  forceFallback: true
};

const Question = (props) => {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      content: "item 1",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 2,
          content: "item 2",
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 3,
          content: "item 3",
          width: 3,
          type: "text",
          parent_id: 1
        }
      ]
    },
    {
      id: 4,
      content: "item 2",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 5,
          content: "item 5",
          width: 3,
          parent_id: 2,
          type: "container",
          children: [
            { id: 8, content: "item 8", width: 6, type: "text", parent_id: 5 },
            { id: 9, content: "item 9", width: 6, type: "text", parent_id: 5 }
          ]
        },
        {
          id: 6,
          content: "item 6",
          width: 2,
          type: "text",
          parent_id: 2
        },
        {
          id: 7,
          content: "item 7",
          width: 2,
          type: "text",
          parent_id: 2
        }
      ]
    }
  ]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };
  return (
    <>
      <div style={{display: 'flex'}}>
          <button onClick={handleBack} style={{ margin: '20px', width: 'min-content', color: 'white', backgroundColor: '#00c7ff', border: 'none', padding: '10px 15px', cursor: 'pointer' }} >Back</button> 
          <div style={{padding: '20px'}}>Đề thi: Team chat ca 2 - Khảo sát & đánh giá kỹ năng thao tác, xử lý vấn đề sales ecom tháng 10/2024</div> 
      </div>
      <div>
      <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
        {blocks.map((block, blockIndex) => (
          <BlockWrapper
            key={block.id}
            block={block}
            blockIndex={[blockIndex]}
            setBlocks={setBlocks}
          />
        ))}
      </ReactSortable>
    </div>
    </>
  )
}
function Container({ block, blockIndex, setBlocks }) {
  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.children}
        setList={(currentList) => {
          setBlocks((sourceList) => {
            const tempList = [...sourceList];
            const _blockIndex = [...blockIndex];
            const lastIndex = _blockIndex.pop();
            const lastArr = _blockIndex.reduce(
              (arr, i) => arr[i]["children"],
              tempList
            );
            console.log(lastIndex);
            lastArr[lastIndex]["children"] = currentList;
            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {block.children &&
          block.children.map((childBlock, index) => {
            return (
              <BlockWrapper
                key={childBlock.id}
                block={childBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
    </>
  );
}
function BlockWrapper({ block, blockIndex, setBlocks }) {
  // console.log(block);
  if (!block) return null;
  if (block.type === "container") {
    return (
      <StyledBlockWrapper className="block">
        container: {block.content}
        <Container
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledBlockWrapper>
    );
  } else {
    return (
      <StyledBlockWrapper className="block">
        text: {block.content}
      </StyledBlockWrapper>
    );
  }
}


export default Question