import React from 'react';
import ReactDom from 'react-dom';


class Modal extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal-mask4" ms-visible="data.isShowDialog">
                <div className="modal-box" ms-blur="hiddenDialog()">
                    <div className="modal-header">
                        <h3>
						<span>
							<b style="color: black">请选择目标区划</b>
						</span>
                        </h3>
                    </div>
                    <span className="cuo" ms-on-click="hiddenDialog()"></span>
                    <div className="modal-body" style="background-color: wheat">
                        <ul id="geanTree" className="ztree" ms-css-height="data.height"></ul>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-primary" value="确认"
                               ms-on-click="selectTargetZoning()"/>
                        <input type="button" className="btn cancel" value="取消" ms-on-click="hiddenDialog()"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;