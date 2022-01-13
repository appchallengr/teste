import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;600&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    body{
        -web-kit-font-smoothing: antialiased;
    }

    table{
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 4px;
        margin-top:10px;

        .lastTDArrow{
            width:2%;
        }

        th{
            text-align: left;
            font-size:12px;
            padding:10px;
            padding-bottom:0px;
            position: relative;
        }

        thead{
            tr{
                td{
                    padding:10px;
                    position:relative;
                }
            }
        }

        .faSort{
            opacity: 0.3;
            position: absolute;
            margin-left: 5px;
            top: 10px;
            right: 0px;
        }

        .faSortActive{
            opacity: 0.3;
            position: absolute;
            margin-left: 5px;
            top: 10px;
            right: 0px;
        }

        tbody{
            tr{
                td{
                    font-family: 'Poppins';
                    font-size: 12px;
                    padding: 10px;

                    background: rgb(241, 242, 246);
                    background: linear-gradient(
                        0deg,
                        rgba(241, 242, 246, 1) 0%,
                        rgba(255, 255, 255, 1) 100%
                    );
                    padding: 15px;
                    box-sizing: border-box;
                    font-size: 12px;
                    border: none !important;
                    color: $primary;
                    &:first-child {
                        border-left-style: solid #fff;
                        border-top-left-radius: 8px;
                        border-bottom-left-radius: 8px;
                    }
                    &:last-child {
                        border-right-style: solid #fff;
                        border-bottom-right-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                }
            }
        }
    }
`
