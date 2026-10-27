# Task 7: Bulk import Call Queues [5 minutes] {#task-7-bulk-import-call-queues-5-minutes}

<p>Some edits need to be done on the bulk csv result to map to the
correct Webex Calling configuration.</p>

<p>Open the “<strong>CallQueueBulk.csv</strong>” file in MS Excel.</p>

<p>Follow the table below to update the values of specific cells in the
csv file.</p>

<table style="width:98%;">
<colgroup>
<col style="width: 20%"/>
<col style="width: 9%"/>
<col style="width: 22%"/>
<col style="width: 17%"/>
<col style="width: 30%"/>
</colgroup>
<thead>
<tr>
<th style="text-align: left;">Queue Name</th>
<th style="text-align: left;">Excel Cell #</th>
<th>Header Name</th>
<th style="text-align: left;">Original Value</th>
<th style="text-align: left;">Replacement Value</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5" style="text-align: center;">Q1_WebexCallingSupport</td>
<td style="text-align: left;">B2</td>
<td>Phone Number</td>
<td style="text-align: left;">6501</td>
<td style="text-align: left;">&lt;blank&gt; (delete 6501)</td>
</tr>
<tr>
<td style="text-align: left;">C2</td>
<td>Extension</td>
<td style="text-align: left;">Empty</td>
<td style="text-align: left;">6501</td>
</tr>
<tr>
<td style="text-align: left;">D2</td>
<td>Location</td>
<td style="text-align: left;">Error….</td>
<td style="text-align: left;">dCloud</td>
</tr>
<tr>
<td style="text-align: left;">I2</td>
<td>Language</td>
<td style="text-align: left;">Error….</td>
<td style="text-align: left;">en_us</td>
</tr>
<tr>
<td style="text-align: left;">J2</td>
<td>Timezone</td>
<td style="text-align: left;">Error….</td>
<td style="text-align: left;">America/Los_Angeles</td>
</tr>
<tr>
<td rowspan="5" style="text-align: center;">Q2_WebexContactCenterSupport</td>
<td style="text-align: left;">B3</td>
<td>Phone Number</td>
<td style="text-align: left;">6502</td>
<td style="text-align: left;">&lt;blank&gt; (delete 6502)</td>
</tr>
<tr>
<td style="text-align: left;">C3</td>
<td>Extension</td>
<td style="text-align: left;">Empty</td>
<td style="text-align: left;">6502</td>
</tr>
<tr>
<td style="text-align: left;">D3</td>
<td>Location</td>
<td style="text-align: left;">Error….</td>
<td style="text-align: left;">dCloud</td>
</tr>
<tr>
<td style="text-align: left;">I3</td>
<td>Language</td>
<td style="text-align: left;">Error….</td>
<td style="text-align: left;">en_us</td>
</tr>
<tr>
<td style="text-align: left;">J3</td>
<td>Timezone</td>
<td style="text-align: left;">Error….</td>
<td style="text-align: left;">America/Los_Angeles</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 10%"/>
<col style="width: 89%"/>
</colgroup>
<thead>
<tr>
<th></th>
<th style="text-align: left;"><p><strong>Note:</strong></p>
<p>Since this is a small lab without a complete dial-plan configuration
(e.g., no PSTN numbers, no inter-site dial prefixes, and no preloaded
greeting audio files), the Migrate Feature from the UCM tool is unable
to map to the correct Webex Calling location or recognize the location
name, language, or greeting file. As a result, the adjustments outlined
above are necessary.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<p>Once all the fields updated, close Excel by choosing: File &gt;
Close.</p>

<p>Save the file and click “<strong>Save</strong>” for the prompt
below.</p>

<p><img alt="Lab guide screenshot 72" height="117" loading="lazy" src="assets/images/image72.png" style="max-width:100%;height:auto;" width="368"/></p>

<p>Finally, select “<strong>Yes</strong>” when prompted to save the file
in CSV format.</p>

<p><img alt="Lab guide screenshot 73" height="196" loading="lazy" src="assets/images/image73.png" style="max-width:100%;height:auto;" width="904"/></p>

<table style="width:98%;">
<colgroup>
<col style="width: 28%"/>
<col style="width: 69%"/>
</colgroup>
<thead>
<tr>
<th><ol type="1">
<li><p>Customer Assist configuration section is under: Services &gt;
Customer Assist</p></li>
<li><p>It will show 3 licenses (out of 50) already assigned for the
three calling users previously configured.</p></li>
<li><p>Next is to upload Call Queue <strong>csv</strong> file by
selecting “Queues” tab in the top menu bar</p></li>
</ol></th>
<th><img alt="Lab guide screenshot 74" height="2064" loading="lazy" src="assets/images/image74.png" style="max-width:100%;height:auto;" width="1828"/></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<p>Click on “Bulk Manage”.</p>

<p><img alt="Lab guide screenshot 75" height="1410" loading="lazy" src="assets/images/image75.png" style="max-width:100%;height:auto;" width="2340"/></p>

<p>Upload the file that we just edited
“<strong>CallQueueBulk.csv</strong>” by drag-and-drop or click on
“Choose a file”.</p>

<p><img alt="Lab guide screenshot 76" height="1510" loading="lazy" src="assets/images/image76.png" style="max-width:100%;height:auto;" width="2352"/></p>

<p>Click “Upload” to start the bulk add for Call Queues.</p>

<p><img alt="Lab guide screenshot 77" height="1276" loading="lazy" src="assets/images/image77.png" style="max-width:100%;height:auto;" width="1984"/></p>

<p>You should see the status 2 Queues were added.</p>

<p><img alt="Lab guide screenshot 78" height="786" loading="lazy" src="assets/images/image78.png" style="max-width:100%;height:auto;" width="1828"/></p>

<p>Close the window to go back to Queues, showing 6501 and 6502 were
added.</p>

<p><img alt="Lab guide screenshot 79" height="826" loading="lazy" src="assets/images/image79.png" style="max-width:100%;height:auto;" width="2166"/></p>

<p>You can refer to this table for the agents and supervisor
assignments.</p>

<table style="width:98%;">
<colgroup>
<col style="width: 15%"/>
<col style="width: 14%"/>
<col style="width: 38%"/>
<col style="width: 15%"/>
<col style="width: 16%"/>
</colgroup>
<thead>
<tr>
<th style="text-align: left;">User</th>
<th>User Extension</th>
<th style="text-align: left;">Queue</th>
<th style="text-align: left;">Queue Extension</th>
<th style="text-align: left;">Role</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Anita Perez</td>
<td>6017</td>
<td style="text-align: left;">Q1_WebexCallingSupport</td>
<td style="text-align: left;">6501</td>
<td style="text-align: left;">Agent</td>
</tr>
<tr>
<td style="text-align: left;">Kellie Melby</td>
<td>6050</td>
<td style="text-align: left;">Q1_WebexCallingSupport</td>
<td style="text-align: left;">6501</td>
<td style="text-align: left;">Agent</td>
</tr>
<tr>
<td style="text-align: left;">Taylor Bard</td>
<td>6026</td>
<td style="text-align: left;">Q1_WebexCallingSupport<br/>
Q2_WebexContactCenterSupport</td>
<td style="text-align: left;">6501<br/>
6502</td>
<td style="text-align: left;">Supervisor</td>
</tr>
</tbody>
</table>

<p><strong>Option 1 to verify agents’ assignments:</strong></p>

<p>Go to “<strong>Q1_WebexCallingSupport</strong>” queue, click “Agents”
in the overview section.</p>

<p><img alt="Lab guide screenshot 80" height="996" loading="lazy" src="assets/images/image80.png" style="max-width:100%;height:auto;" width="2376"/></p>

<p>You would see “Anita Perez” and “Kellie Melby” are already assigned
as agents, this configuration was imported from the Unified
Communications Manager Hunt Pilot Queue data export.</p>

<p><img alt="Lab guide screenshot 81" height="868" loading="lazy" src="assets/images/image81.png" style="max-width:100%;height:auto;" width="2122"/></p>

<p>Repeat the same steps to view
“<strong>Q2_WebexContactCenterSupport</strong>” Agents configuration you
would see “Taylor Bard” as an assigned Agent.</p>

<p><img alt="Lab guide screenshot 82" height="984" loading="lazy" src="assets/images/image82.png" style="max-width:100%;height:auto;" width="2122"/></p>

<p><strong>Option 2 to verify agents’ assignments:</strong></p>

<p>From Customer Assist dashboard, click “Agents” to see all agents
defined in all Call Queues. You can click on “&gt;” to the left of the
agent name to see more detail.</p>

<p><img alt="Lab guide screenshot 83" height="1144" loading="lazy" src="assets/images/image83.png" style="max-width:100%;height:auto;" width="3490"/></p>

### Using Task Status to Identify Failed Import {#using-task-status-to-identify-failed-import-1}

<p>You can use “<strong>Task Status</strong>” as shown in Task 6 to
check status of past bulk add for Auto Attendant and Call Queues.</p>

<p><img alt="Lab guide screenshot 84" height="539" loading="lazy" src="assets/images/image84.png" style="max-width:100%;height:auto;" width="1399"/></p>
