//SPDX-License-Identifier:GPL

pragma solidity 0.8.30;

contract Book {

  struct book{
    string title;
    string genre;
    address owner;
    bool status;
    uint256 price;
  }

  address public admin;
  
  mapping(uint256=>book)public BookDetails;

    constructor(){
        admin = msg.sender;
    }

    modifier onlyAdmin{
         
        require(msg.sender==admin,"Unauthorized access");
        _;
    }

    function addBook(
        uint256 _id,
        string memory _title,
        string memory _genre,
        address _owner,
        bool _status,
        uint256 _price
    ) public onlyAdmin{
        
        
        // BookDetails[_id].title=_title;
        // BookDetails[_id].genre=_genre;
        // BookDetails[_id].owner=_owner;
        // BookDetails[_id].status=_status;
        // BookDetails[_id].price =_price;
        BookDetails[_id]= book(_title,_genre,_owner,_status,_price);
    }

    function updateBook()public{

    }
}