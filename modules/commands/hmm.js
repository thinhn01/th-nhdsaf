const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "hmm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz (fix lại by CHIP)",
  description: "Ảnh 18+",
  commandCategory: "Random-img",
  usages: "hmm",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
	var link = [
     "https://i.imgur.com/B5ZyErb.jpg",
     "https://i.imgur.com/CrwrKlk.jpg",
     "https://i.imgur.com/tV61WsV.jpg",
     "https://i.imgur.com/66O6j1T.jpg",
     "https://i.imgur.com/R8KKRoN.jpg",
     "https://i.imgur.com/3EkVNe8.jpg",
      "https://i.imgur.com/k0jwRfs.jpg",
     "https://i.imgur.com/we4jvDp.jpg",
     "https://i.imgur.com/mISVkFC.jpg",
     "https://i.imgur.com/fQ5EHVZ.jpg",
     "https://i.imgur.com/GjbA4Ze.jpg",
     "https://i.imgur.com/dIzxU8Q.jpg",
      "https://i.imgur.com/a9o8A1a.jpg",
     "https://i.imgur.com/VwL7Nul.jpg",
     "https://i.imgur.com/tJF0xSU.jpg",
     "https://i.imgur.com/JiRhi00.jpg",
     "https://i.imgur.com/sWqCkwd.jpg",
     "https://i.imgur.com/r2usTzU.jpg",
      "https://i.imgur.com/OxhZsje.jpg",
     "https://i.imgur.com/vIBxhrD.jpg",
     "https://i.imgur.com/BJ0so5w.jpg",
     "https://i.imgur.com/vFANQJv.jpg",
     "https://i.imgur.com/9oU7z8g.jpg",
     "https://i.imgur.com/udTH3a1.jpg",
      "https://i.imgur.com/GV3WdKM.jpg",
     "https://i.imgur.com/1oYHF8W.jpg",
     "https://i.imgur.com/IjvL7BI.jpg",
     "https://i.imgur.com/gVhh9N2.jpg",
     "https://i.imgur.com/RH2zjOe.jpg",
     "https://i.imgur.com/hztZuAX.jpg",
      "https://i.imgur.com/GeVMt9o.jpg",
     "https://i.imgur.com/Q5hNjZX.jpg",
     "https://i.imgur.com/jFCU35N.jpg",
     "https://i.imgur.com/qpeaxY5.jpg",
     "https://i.imgur.com/R1g44xU.jpg",
     "https://i.imgur.com/xfxHrXL.jpg",
      "https://i.imgur.com/ph2qlIf.jpg",
     "https://i.imgur.com/eSf63Uf.jpg",
     "https://i.imgur.com/bTTq9LJ.jpg",
     "https://i.imgur.com/X0RK5T8.jpg",
     "https://i.imgur.com/LDHHAhu.jpg",
     "https://i.imgur.com/W71RsYu.jpg",
      "https://i.imgur.com/TGmFRW6.jpg",
     "https://i.imgur.com/ZyxAOIu.jpg",
     "https://i.imgur.com/Ej2b8aT.jpg",
     "https://i.imgur.com/2Vbu7Gp.jpg",
     "https://i.imgur.com/8XN7mb5.jpg",
     "https://i.imgur.com/wPb4HPU.jpg",
      "https://i.imgur.com/z6dlAn3.jpg",
     "https://i.imgur.com/hITbCDe.jpg",
     "https://i.imgur.com/EGrcRYS.jpg",
     "https://i.imgur.com/poCvruJ.jpg",
     "https://i.imgur.com/ntOZOPe.jpg",
     "https://i.imgur.com/NBqRXsf.jpg",
      "https://i.imgur.com/codSlYk.jpg",
     "https://i.imgur.com/dTsmNI6.jpg",
     "https://i.ibb.co/kyLhvqw/www-acguz-com.jpg",
"https://i.ibb.co/pj96rGP/www-acguz-com.jpg",
"https://i.ibb.co/QNRV6mz/www-acguz-com.jpg",
"https://i.ibb.co/wM59D96/www-acguz-com.jpg",
"https://i.ibb.co/9q5dSjg/www-acguz-com.jpg",
"https://i.ibb.co/zQGd3gD/www-acguz-com.jpg",
"https://i.ibb.co/k65LnJJ/www-acguz-com.jpg",
"https://i.ibb.co/ncpKdbK/www-acguz-com.jpg",
"https://i.ibb.co/dmnSsY4/www-acguz-com.jpg",
"https://i.ibb.co/XFpQJ7X/www-acguz-com.jpg",
"https://i.ibb.co/NxQSnhY/www-acguz-com.jpg",
"https://i.ibb.co/B42RVw7/www-acguz-com.jpg",
"https://i.ibb.co/rct5Xc0/www-acguz-com.jpg",
"https://i.ibb.co/pWPN3Pg/www-acguz-com.jpg",
"https://i.ibb.co/dPg3n52/www-acguz-com.jpg",
"https://i.ibb.co/n6zMH8m/www-acguz-com.jpg",
"https://i.ibb.co/CmCHT7v/www-acguz-com.jpg",
"https://i.ibb.co/XWp6VNb/www-acguz-com.jpg",
"https://i.ibb.co/n7PXw0F/www-acguz-com.jpg",
"https://i.ibb.co/7k87hV6/www-acguz-com.jpg",
"https://i.ibb.co/x8TSRXb/guomo-info.jpg",
"https://i.ibb.co/JHCR0TV/guomo-info.jpg",
"https://i.ibb.co/7W8fK6D/guomo-info.jpg",
"https://i.ibb.co/4jBtcGS/guomo-info.jpg",
"https://i.ibb.co/J2KwKJd/guomo-info.jpg",
"https://i.ibb.co/M9s5CyY/guomo-info.jpg",
"https://i.ibb.co/tJw6vzJ/guomo-info.jpg",
"https://i.ibb.co/kc7L3g3/guomo-info.jpg",
"https://i.ibb.co/DzJVBJt/guomo-info.jpg",
"https://i.ibb.co/sgKdBcB/guomo-info.jpg",
"https://i.ibb.co/XYjT7PF/guomo-info.jpg",
"https://i.ibb.co/WVjKvqL/guomo-info.jpg",
"https://i.ibb.co/GpZjvSB/15-00008.jpg",
"https://i.ibb.co/PGG1Xcr/www-acguz-com-1.jpg",
"https://i.ibb.co/j54Drvy/www-acguz-com.jpg",
"https://i.ibb.co/DGKb95C/www-acguz-com.jpg",
"https://i.ibb.co/nRFMHsN/www-acguz-com.jpg",
"https://i.ibb.co/QcCLsJ8/www-acguz-com.jpg",
"https://i.ibb.co/2dGsp5j/www-acguz-com.jpg",
"https://i.ibb.co/LRj7xx0/www-acguz-com.jpg",
"https://i.ibb.co/K7NDvR5/www-acguz-com.jpg",
"https://i.ibb.co/rFc4X96/www-acguz-com.jpg",
"https://i.ibb.co/X2bh1g9/www-acguz-com.jpg",
"https://i.ibb.co/K0cx7jk/www-acguz-com.jpg",
"https://i.ibb.co/PFKGsT4/www-acguz-com.jpg",
"https://i.ibb.co/W3vGHn8/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/pbYJ2K2/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/6JF2QfR/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/tQ7jRJV/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/b1vmNs7/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/0rytC6k/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/LQ1yfx5/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/HrTYMty/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/RQZbn7G/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/pPShnt5/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/jy0S45y/9-Cloud-us-0023-Snz083.jpg",
"https://i.ibb.co/3zM24kg/9-Cloud-us-0078-Dsc09759.jpg",
"https://i.ibb.co/ByrQv7J/9-Cloud-us-0089-008-12322768-446904075504231-2152716185147741619-O.jpg",
"https://i.ibb.co/wQW03zX/9-Cloud-us-0090-097-19366174-660698564124780-1656181256266725151-N.jpg",
"https://i.ibb.co/BVC7HGj/9-Cloud-us-0112-754-Haneame-Cosplay-Record-Of-Lodoss-War-Deedlit-C.jpg",
"https://i.ibb.co/4dJTQRb/9-Cloud-us-0156-13.jpg",
"https://i.ibb.co/JCBJSwJ/45w-by-7.jpg",
"https://i.ibb.co/427dj8k/a-1.jpg",
"https://i.ibb.co/sw5Yz5D/a-3.jpg",
"https://i.ibb.co/styjDBN/a-4.jpg",
"https://i.ibb.co/QJD4Gmk/a-5.jpg",
"https://i.ibb.co/DQ313dW/a-6.jpg",
"https://i.ibb.co/tQss01Z/a-7.jpg",
"https://i.ibb.co/dMNg9NZ/a-8.jpg",
"https://i.ibb.co/2syxCyx/a-9.jpg",
"https://i.ibb.co/hKtsS1k/a-12.jpg",
"https://i.ibb.co/rMWdxXc/a-13.jpg",
"https://i.ibb.co/Q8XTzwW/a-14.jpg",
"https://i.ibb.co/xYDp53P/a-15.jpg",
"https://i.ibb.co/yN5K9Bd/a-16.jpg",
"https://i.ibb.co/371SpZP/a-17.jpg",
"https://i.ibb.co/J5rmmf1/a-19.jpg",
"https://i.ibb.co/KzNX1qC/a-23.jpg",
"https://i.ibb.co/HHtRj9h/a-25.jpg",
"https://i.ibb.co/719W9xG/a-26.jpg",
"https://i.ibb.co/bWf2LZ0/a-28.jpg",
"https://i.ibb.co/2hyYmKK/a-29.jpg",
"https://i.ibb.co/ZXXkR29/a-31.jpg",
"https://i.ibb.co/vhLQYP2/a-34.jpg",
"https://i.ibb.co/YcfyrHB/a-35.jpg",
"https://i.ibb.co/kKsc5Cn/a-36.jpg",
"https://i.ibb.co/YW7nsmT/a-37.jpg",
"https://i.ibb.co/ryy52Qh/a-38.jpg",
"https://i.ibb.co/Tkp87bS/a-39.jpg",
"https://i.ibb.co/zVKVB9G/guomo-info.jpg",
"https://i.ibb.co/FYGnTxz/guomo-info.jpg",
"https://i.ibb.co/TMymMz6/guomo-info.jpg",
"https://i.ibb.co/CWJPyfT/guomo-info.jpg",
"https://i.ibb.co/kXB3Q3x/guomo-info.jpg",
"https://i.ibb.co/7rk0Q22/guomo-info.jpg",
"https://i.ibb.co/4ZTV2TY/guomo-info.jpg",
"https://i.ibb.co/vj7hpN2/guomo-info.jpg",
"ttps://i.ibb.co/5xnPktz/9-Cloud-us-0005-Dsc-0438.jpg",
"https://i.ibb.co/1RP7KdZ/9-Cloud-us-0007-Dsc-0445.jpg",
"https://i.ibb.co/88PTFdZ/9-Cloud-us-0013-Dsc-0480.jpg",
"https://i.ibb.co/pr3QGd6/9-Cloud-us-0017-Dsc-0524.jpg",
"https://i.ibb.co/v3zffvM/9-Cloud-us-0024-Dsc-0549.jpg",
"https://i.ibb.co/6Jj25cF/bbs-tjdige-com.jpg",
"https://i.ibb.co/xJkFLPj/bbs-tjdige-com.jpg",
"https://i.ibb.co/KrKtCMY/bbs-tjdige-com.jpg",
"https://i.ibb.co/DkkZxqb/bbs-tjdige-com.jpg",
"https://i.ibb.co/3kVnmV0/bbs-tjdige-com.jpg",
"https://i.ibb.co/kJzMnJx/bbs-tjdige-com.jpg",
"https://i.ibb.co/vvW6Kjn/bbs-tjdige-com.jpg",
"https://i.ibb.co/4KwTXwg/bbs-tjdige-com.jpg",
"https://i.ibb.co/SwG4q5D/bbs-tjdige-com.jpg",
"https://i.ibb.co/phWHfc5/bbs-tjdige-com.jpg",
"https://i.ibb.co/F85YQ8Y/bbs-tjdige-com.jpg",
"https://i.ibb.co/9wphMhm/bbs-tjdige-com.jpg",
"https://i.ibb.co/m8rpBZc/bbs-tjdige-com.jpg",
"https://i.ibb.co/jyxkp8p/bbs-tjdige-com.jpg",
"https://i.ibb.co/3NmL6rg/bbs-tjdige-com.jpg",
"https://i.ibb.co/dbYxZKX/bbs-tjdige-com.jpg",
"https://i.ibb.co/BKNsbN7/bbs-tjdige-com.jpg",
"https://i.ibb.co/PGH5Yb9/bbs-tjdige-com.jpg",
"https://i.ibb.co/BBNYkrH/bbs-tjdige-com.jpg",
"https://i.ibb.co/zFPGHg3/bbs-tjdige-com.jpg",
"https://i.ibb.co/k5pdwpm/bbs-tjdige-com.jpg",
"https://i.ibb.co/NVTjRHS/bbs-tjdige-com.jpg",
"https://i.ibb.co/Tht707n/bbs-tjdige-com.jpg",
"https://i.ibb.co/s2YmMnY/bbs-tjdige-com.jpg",
"https://i.ibb.co/G3fVWdK/5cced5ee83e65.jpg",
"https://i.ibb.co/dpBJmRj/5cced5ef1d50d.jpg",
"https://i.ibb.co/1dWMXKX/5cced6074c7eb.jpg",
"https://i.ibb.co/4Pkxs7F/IMG-20190719-222449.jpg",
"https://i.ibb.co/6wbnDnd/IMG-20190719-222456.jpg",
"https://i.ibb.co/2qXYg5c/IMG-20190719-222614.jpg",
"https://i.ibb.co/hYJQwZ6/IMG-20190719-222623.jpg",
"https://i.ibb.co/dGFgFLL/IMG-20190719-222637.jpg",
"https://i.ibb.co/jDb6PJd/IMG-20190719-222645.jpg",
"https://i.ibb.co/6rh4sx9/IMG-20190719-222652.jpg",
"https://i.ibb.co/BqXpK28/IMG-20190719-222702.jpg",
"https://i.ibb.co/7vdPKQW/IMG-20190719-222716.jpg",
"https://i.ibb.co/3y20SrZ/IMG-20190719-222723.jpg",
"https://i.ibb.co/RNYvqGv/IMG-20190719-222736.jpg",
"https://i.ibb.co/K7Wvqz7/IMG-20190719-222758.jpg",
"https://i.ibb.co/J21zFbx/IMG-20190719-222812.jpg",
"https://i.ibb.co/VxzFL6C/IMG-20190719-222826.jpg",
"https://i.ibb.co/nfXGb6V/IMG-20190719-222834.jpg",
"https://i.ibb.co/y504LVz/IMG-20190719-222847.jpg",
"https://i.ibb.co/GFtvpQ1/1-8.jpg",
"https://i.ibb.co/cN3b148/1-13.jpg",
"https://i.ibb.co/2nTSw1B/1-14.jpg",
"https://i.ibb.co/jyDw3bV/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/JRDt2yz/zjh-wtf-20.jpg",
"https://i.ibb.co/QYBt8kH/dailyfuli-com-14.jpg",
"https://i.ibb.co/wzXGYSj/dailyfuli-com-18.jpg",
"https://i.ibb.co/2tRkVR3/dailyfuli-com-23.jpg",
"https://i.ibb.co/BCCS0ZP/guomo-info.jpg",
"https://i.ibb.co/4J77CgL/IMG-20190719-164520.jpg",
"https://i.ibb.co/99p0fhK/IMG-20190719-164822.jpg",
"https://i.ibb.co/F6K3k7g/IMG-20190719-164841.jpg",
"https://i.ibb.co/s6zykMF/IMG-20190719-164854.jpg",
"https://i.ibb.co/86yd9Nq/IMG-20190719-164900.jpg",
"https://i.ibb.co/qrYztGS/1-18.jpg",
"https://i.ibb.co/Y21W34r/11-6.jpg",
"https://i.ibb.co/m9DjcDW/11-7.jpg",
"https://i.ibb.co/mX7STFW/11-8.jpg",
"https://i.ibb.co/1RygHcW/11-9.jpg",
"https://i.ibb.co/30FxY35/11-51.jpg",
"https://i.ibb.co/GPHvf4w/11-52.jpg",
"https://i.ibb.co/TKQ6xCr/11-57.jpg",
"https://i.ibb.co/yNQVyv2/11-58.jpg",
"https://i.ibb.co/dGtcCkY/11-59.jpg",
"https://i.ibb.co/3fy98cP/11-60.jpg",
"https://i.ibb.co/GQV8n8f/11-61.jpg",
"https://i.ibb.co/SRTBBmH/11-62.jpg",
"https://i.ibb.co/hyDWPxx/11-63.jpg",
"https://i.ibb.co/q57M1Jp/11-64.jpg",
"https://i.ibb.co/1TqWMv1/11-65.jpg",
"https://i.ibb.co/bz6CyG7/11-66.jpg",
"https://i.ibb.co/64rKLyr/11-67.jpg",
"https://i.ibb.co/TPPRTyy/11-68.jpg",
"https://i.ibb.co/S6ZbhXn/11-70.jpg",
"https://i.ibb.co/7Q0503r/11-71.jpg",
"https://i.ibb.co/Yh2RCgR/IMG-20190719-170602.jpg",
"https://i.ibb.co/kKQsR2F/IMG-20190719-170609.jpg",
"https://i.ibb.co/2ZcBfMj/IMG-20190719-170615.jpg",
"https://i.ibb.co/DDkwCvM/IMG-20190719-170627.jpg",
"https://i.ibb.co/42vhYFp/IMG-20190719-170633.jpg",
"https://i.ibb.co/F6svKVf/IMG-20190719-170640.jpg",
"https://i.ibb.co/8b6VgP6/2-7.jpg",
"https://i.ibb.co/LZ11RL2/SP2-mp4-20180908-012001-054.jpg",
"https://i.ibb.co/0Dd83z0/guomo-info.jpg",
"https://i.ibb.co/2vNKkpV/guomo-info.jpg",
"https://i.ibb.co/Bgk2DfH/guomo-info.jpg",
"https://i.ibb.co/jJMrRDH/guomo-info.jpg",
"https://i.ibb.co/ZVT6gBH/guomo-info.jpg",
"https://i.ibb.co/smVdH1s/guomo-info.jpg",
"https://i.ibb.co/TbTjKJk/guomo-info.jpg",
"https://i.ibb.co/WnqLVZz/guomo-info.jpg",
"https://i.ibb.co/c2Y6Dsb/guomo-info.jpg",
"https://i.ibb.co/RD45bNR/guomo-info.jpg",
"https://i.ibb.co/J5CRc0k/guomo-info.jpg",
"https://i.ibb.co/gRCJfyR/guomo-info.jpg",
"https://i.ibb.co/jGB7G1x/guomo-info.jpg",
"https://i.ibb.co/MSWqztq/guomo-info.jpg",
"https://i.ibb.co/6XB8v6S/guomo-info.jpg",
"https://i.ibb.co/4dqpjhh/guomo-info.jpg",
"https://i.ibb.co/9N3ZTyw/guomo-info.jpg",
"https://i.ibb.co/r5j5Lrs/guomo-info.jpg",
"https://i.ibb.co/9TDNv60/guomo-info.jpg",
"https://i.ibb.co/nRDJbnn/guomo-info.jpg",
"https://i.ibb.co/gWJ0bc9/9-Cloud-us-0001-Ojaodvq3-Mj1-Tkv6-T1-O6-1280.jpg",
"https://i.ibb.co/mcVZvP2/9-Cloud-us-0010-Ojceruhgnj1-Tkv6-T1-O1-1280.jpg",
"https://i.ibb.co/NT4kznN/9-Cloud-us-0011-Ojaodvq3-Mj1-Tkv6-T1-O8-1280.jpg",
"https://i.ibb.co/t4rz23n/9-Cloud-us-0012-Olcn52-Rkop1-Tkv6-T1-O6-1280.jpg",
"https://i.ibb.co/BLtPG32/9-Cloud-us-0014-Olcn52-Rkop1-Tkv6-T1-O4-1280.jpg",
"https://i.ibb.co/PTk84jB/9-Cloud-us-0015-Olcn52-Rkop1-Tkv6-T1-O3-1280.jpg",
"https://i.ibb.co/f2K3wds/9-Cloud-us-0018-Okxoxrlebd1-Tkv6-T1-O7-1280.jpg",
"https://i.ibb.co/hRVcY6R/9-Cloud-us-0021-Okxoxrlebd1-Tkv6-T1-O4-1280.jpg",
"https://i.ibb.co/pjh9SWM/9-Cloud-us-0024-Okxoxrlebd1-Tkv6-T1-O1-1280.jpg",
"https://i.ibb.co/f8QN7Kb/9-Cloud-us-0025-Ok0-Jryer6-M1-Tkv6-T1-O6-1280.jpg",
"https://i.ibb.co/cD0NNHY/9-Cloud-us-0030-Ok0-Jryer6-M1-Tkv6-T1-O1-1280.jpg",
"https://i.ibb.co/8jDpCG1/9-Cloud-us-0032-Ojyi4-Ai1-Qd1-Tkv6-T1-O5-1280.jpg",
"https://i.ibb.co/nspTdTf/9-Cloud-us-0037-Ojhtmmxknc1-Tkv6-T1-O6-1280.jpg",
"https://i.ibb.co/F4G6mLK/9-Cloud-us-0039-Ojhtmmxknc1-Tkv6-T1-O4-1280.jpg",
"https://i.ibb.co/fpD0hmM/9-Cloud-us-0041-Ojhtmmxknc1-Tkv6-T1-O2-1280.jpg",
"https://i.ibb.co/tsdFyTZ/9-Cloud-us-0050-Oixuuhoj9-Y1-Tkv6-T1-O3-1280.jpg",
"https://i.ibb.co/JjGqjQL/9-Cloud-us-0051-Oixuuhoj9-Y1-Tkv6-T1-O2-1280.jpg",
"https://i.ibb.co/4tn9KNh/9-Cloud-us-0052-Oixuuhoj9-Y1-Tkv6-T1-O1-1280.jpg",
"https://i.ibb.co/T2tG2yd/IMG-20190726-215536.jpg",
"https://i.ibb.co/PWjSWXz/IMG-20190726-215544.jpg",
"https://i.ibb.co/WtMDq8w/IMG-20190726-215807.jpg",
"https://i.ibb.co/zWgXdFJ/IMG-20190726-215840.jpg",
"https://i.ibb.co/gvmPkxJ/IMG-20190722-214633.jpg",
"https://i.ibb.co/HxrFsq4/guomo-info.jpg",
"https://i.ibb.co/JmtZ0Ly/0003.jpg",
"https://i.ibb.co/GCm3k4y/0008.jpg",
"https://i.ibb.co/SPFKN5W/56.jpg",
"https://i.ibb.co/9nFW5vv/59.jpg",
"https://i.ibb.co/DR15rLx/60.jpg",
"https://i.ibb.co/d7btbBN/61.jpg",
"https://i.ibb.co/cyNkZ76/66.jpg",
"https://i.ibb.co/VN9gcph/76.jpg",
"https://i.ibb.co/d7md6hc/77.jpg",
"https://i.ibb.co/9ywZnM9/78.jpg",
"https://i.ibb.co/dcWv6wd/79.jpg",
"https://i.ibb.co/5Ggqx4h/XJJ-170827-01.jpg",
"https://i.ibb.co/VvTqFgD/XJJ-170827-06.jpg",
"https://i.ibb.co/p0ThvWQ/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/fv7bkfg/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/xfKGMTz/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/d2rkG0j/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/fSHHfYz/djulia-blog-fc2blog-us.jpg",
"https://i.ibb.co/L0bMk3d/IMG-4077.jpg",
"https://i.ibb.co/mD0fF3Y/IMG-4078.jpg",
"https://i.ibb.co/NnPFj6x/IMG-4080.jpg",
"https://i.ibb.co/ZKTBzFh/IMG-4081.jpg",
"https://i.ibb.co/q7TJkkC/IMG-4083.jpg",
"https://i.ibb.co/K7ysQV5/IMG-4085.jpg",
"https://i.ibb.co/k6FcyNH/IMG-4086.jpg",
"https://i.ibb.co/6NkCBvZ/IMG-4090.jpg",
"https://i.ibb.co/kghT1Zw/IMG-4095.jpg",
"https://i.ibb.co/jLpmpwq/IMG-4167.jpg",
"https://i.ibb.co/Bj9kwTx/IMG-4169.jpg",
"https://i.ibb.co/16sCzKQ/IMG-4170.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh Gái 18+\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/29.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/29.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/29.jpg")).on("close",() => callback());
     }
   };