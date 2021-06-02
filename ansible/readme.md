# Ansible

- Considering the security, we delete the private key files when we make the repo public

1. Deploy instancess on the Nectar
   - <table>
       <tr>
           <th>Hosts</th>
           <th>role</th>
           <th>description</th>
       </tr>
       <tr>
           <td rowspan="5">localhost</td>
           <td>common</td>
           <td>Install related packages in each instances</td>
       </tr>
       <tr>
           <td>create-volumes</td>
           <td>Create volumes from host_vars</td>
       </tr>
       <tr>
           <td>create-security-groups</td>
           <td>Create security groups and their rules</td>
       </tr>
       <tr>
           <td>create-instances</td>
           <td>Create instances on NeCTAR<br>Add hosts to Ansible in-memory inventory and a file for hosts ip to inventory/wm_inventory_file</td>
       </tr>
       <tr>
           <td>demo-common</td>
           <td>Download related package for use in the instance</td>
       </tr>
       <tr>
           <td>create volume snapshot</td>
           <td>create volume snapshot</td>
       </tr>
       </table>
   - `. ./create_instance.sh`
2. Deploy couchdb and cluster
   - <table>
      <tr>
          <th>Hosts</th>
          <th>role</th>
          <th>description</th>
      </tr>
      <tr>
          <td rowspan="1">Database</td>
          <td>deploy-couchdb</td>
          <td>Deploy and Start couchdb docker container in three instances as database</td>
      </tr>
      <tr>
          <td>Masternode</td>
          <td>deploy-couchdb-cluster</td>
          <td>Configure cluster setting in one of the three database as masternode</td>
      </tr>
      </table>
   - `. ./deploy_couchdb.sh`
3. Git clone project files to the instance
   - `. ./git_clone.sh`
   - `. ./git_pull.sh`(execute when files or code need update)
4. Deploy twitterHarvester

   - <table>
      <tr>
          <th>Hosts</th>
          <th>role</th>
          <th>description</th>
      </tr>
      <tr>
        <td rowspan="1"> Crawler</td>
        <td>Deploy crawler for harvesting twitter</td>
        <td>Shut down the existing harvester container and start a new one based on the newest code</td>
      </tr>
      
      </table>

   - `. ./deploy_crawler.sh`

5. Deploy Frontend & Backend

   - <table>
       <tr>
           <th>Hosts</th>
           <th>role</th>
           <th>description</th>
       </tr>
       <tr>
           <td rowspan="2"> Demo</td>
           <td>Deploy frontend</td>
           <td>Start docker container running frontend code</td>
       </tr>
       <tr>
           <td>Deploy backend</td>
           <td>Start docker container running backend code to serve</td>
       </tr>
       
       </table>

   - `. ./deploy_frontend.sh`
   - `. ./deploy_backend.sh`
