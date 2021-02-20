function jump_to(link_extension, absolute=0){
    if(absolute){
        //url is absolute;
        //don't forget to write the complete the url and mention even the protocol.
        window.location.href = link_extension;
    }
    else {
        //url is relative
        window.location.href = window.location.origin + link_extension;
    }
}
export default jump_to;