import { createHeader } from '/src/default_layout/header.js';
import { createFooter } from '/src/default_layout/footer.js';
import { execDaumPostcode } from '/src/modules/orderModules/inputUserAddress.js';
import { orderdIedGoodsList } from '/src/modules/order_editModules/orderdIedGoodsList.js';
// import { sendShippingData } from '/src/modules/orderModules/userShippingInput.js';
import { autoHyphen } from '/src/modules/sign_upModules/autoHyphenPhoneNumber.js';
import { showOrderId } from '/src/modules/order_completeModules/getOrderId.js';
import { orderedReceiverProfile } from '/src/modules/order_editModules/orderedReceiverProfile.js';
import { getOrderPrice } from '/src/modules/order_completeModules/getOrderPrice.js';
import { deleteAllOrder } from '/src/modules/order_editModules/deleteAllOrder.js';

document.addEventListener('DOMContentLoaded', createHeader);
document.addEventListener('DOMContentLoaded', createFooter);
document.addEventListener('DOMContentLoaded', showOrderId);
document.addEventListener('DOMContentLoaded', orderdIedGoodsList);
document.addEventListener('DOMContentLoaded', orderedReceiverProfile);
document.addEventListener('DOMContentLoaded', getOrderPrice);

document
  .getElementById('getuserAddress')
  .addEventListener('click', execDaumPostcode);
// document
//   .getElementById('orderComplete')
//   .addEventListener('click', sendShippingData);
document
  .getElementById('receiver-phone-number')
  .addEventListener('input', autoHyphen);

document.getElementById('delete-all').addEventListener('click', deleteAllOrder);