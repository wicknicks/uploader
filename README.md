# Sample uploader using Plupload, node.js and Express

A repository to hold my sample web based uploader. Contains all the dependencies. Its a one stop shop for a working uploader.

By default, it stores the uploaded files to /data/uploads. Use the command:

   sudo mkdir /data/uploads

on Ubuntu to do this. If you can't create the directory, change the line 35 in upload.js to the directory where you want the files to go. 

Extract the zip file anywhere, and start the server with the command:

    node upload.js

Point your browser to [http://localhost:3000/](http://localhost:3000/) to bring up the uploader page. Press the button 
Add Photos to Queue" to add photos from a directory. This collects photos into a 'queue'. You can see a message like :

    117 items added to the queue. Press Upload Queue.

You can add more items. Or press the "Upload Queue" link to start the upload.

You will see messages on the terminal from node like:

    Received upload IMG_20101122_095944.jpg (100 Kb) to /tmp/6406e1786a55172872fec5c0581e89ad
    Renamed to: /data/uploads/6406e1786a55172872fec5c0581e89ad

That should confirm the working of the stack.
