try {

	var conn = $.db.getConnection();
	var cds = $.require("sap-cds"); //.xsjs(conn);
	var XSDS = cds.xsjs(conn);
	//Import(Namespace,Entity Name, fields, options)
	var oEmployee = XSDS.$importEntity("cds.example.db", "MD.Employees");
	var employee = null;
	employee = oEmployee.$query().$project({
		LOGINNAME: true
	}).$execute();

	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(employee));

} catch (e) {
	$.response.setBody(e.toString());
}